import axios from 'axios';

import { defaultError, S3BucketBaseUrl } from '@/components/constant';
import { getBlob } from '../client-helper';

function useUploadImageToS3() {
	// UPLOAD Image to S3 ==========================
	// url: the api that should be called
	// headers:
	// sendData:
	// YOU SHOULD SEND ONE OF value OR body
	// value: This is image link
	// body: This is the blob body
	const uploadImageToS3 = async ({
		url: apiUrl,
		sendData,
		value,
		headers,
		body: parentBody,
	}: {
		url: string;
		sendData: any;
		value?: string;
		body?: Blob;
		headers: any;
	}): Promise<string> => {
		if (!!parentBody && !!value) {
			throw new Error('Blob or URL is required !!!');
		}

		// eventRef, userID, currentFileName, ext, type
		const res = await axios.post(apiUrl, sendData, headers);

		if (!res || !res?.data?.ok) {
			throw new Error(res?.data?.errors[0]?.message || defaultError);
		}

		const dataHere = res?.data?.packet?.s3Data;

		let returnLink = '';

		const body = parentBody || (value && (await getBlob(value)));
		if (!body || body instanceof Error) throw new Error('Image is not valid !!!');

		if (!dataHere) {
			throw new Error(defaultError);
		}

		let status;
		const url = dataHere?.url;
		const checkLink = dataHere?.source;

		console.log('send uploadImageAndCheck', url, body, checkLink);

		status = await uploadImageAndCheck({ url, body, checkLink, headers });
		if (status) returnLink = checkLink;
		else {
			status = await uploadImageAndCheck({ url, body, checkLink, headers });
			if (status) returnLink = checkLink;
			else {
				status = await uploadImageAndCheck({ url, body, checkLink, headers });
				if (status) returnLink = checkLink;
				else throw new Error('Error in uploading the image');
			}
		}

		return returnLink;
	};

	// Image check if it is really there or not
	const uploadImageAndCheck = async ({
		url,
		body,
		checkLink,
		headers = {},
	}: {
		url: string;
		body: Blob;
		checkLink: string;
		headers: any;
	}) => {
		const res1 = await axios.put(url, body, {
			headers,
		});

		if (!res1) return false;

		const res2 = await fetch(`${S3BucketBaseUrl}${checkLink}`);
		if (res2.status === 200) return true;
		return false;
	};

	return { uploadImageToS3 };
}

export default useUploadImageToS3;
