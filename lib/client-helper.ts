export const blobToPreview = async (blob: Blob): Promise<string | false> => {
	if (!blob) {
		return false;
	}

	const isBlob = (value: any): value is Blob => value instanceof Blob;

	try {
		if (isBlob(blob)) {
			const reader = new FileReader();

			const result = await new Promise<string>((resolve, reject) => {
				reader.onload = (event: ProgressEvent<FileReader>) => {
					if (!event.target || !event.target.result) {
						reject(new Error('No event target or result'));
					} else {
						resolve(event.target.result as string);
					}
				};

				reader.readAsDataURL(blob);
			});

			return result;
		} else {
			throw new Error('Image is not in Blob format');
		}
	} catch (error) {
		return false;
	}
};

import { S3BucketBaseUrl } from '@/components/constant';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

export const previewToBlob = (preview: any) => {
	if (!preview) return false;

	const isBase64 = (str: string) => str.indexOf('data:') !== -1;

	function dataURLtoBlob(dataURL: string) {
		const [, mimeType, base64Data] = dataURL.match(/^data:(.*?);base64,(.*)$/) || [];
		const binaryData = atob(base64Data);
		const arrayBuffer = new ArrayBuffer(binaryData.length);
		const view = new Uint8Array(arrayBuffer);

		for (let i = 0; i < binaryData.length; i += 1) {
			view[i] = binaryData.charCodeAt(i);
		}
		return new Blob([arrayBuffer], { type: mimeType });
	}

	const fetchFromUrl = async (url: string) => {
		const result = await fetch(url);
		const blobResult = result.blob();
		return blobResult;
		// } catch (err) {
		//   console.log(err);
		//   return false;
		// }
	};

	const previewToBlob = async () => {
		try {
			if (!preview) {
				throw new Error('No preview provided');
			}
			let blob;
			if (isBase64(preview)) {
				blob = dataURLtoBlob(preview);
			} else {
				blob = await fetchFromUrl(preview);
			}
			return blob;
		} catch (err: any) {
			// customToast({ type: 'error', msg: err.message });
			toast({
				variant: 'destructive',
				title: err.message || 'Something went wrong!!!',
				// description: 'Friday, February 10, 2023 at 5:57 PM',
			});
			return false;
		}
	};

	return previewToBlob();
};

export const getBlob = async (fileUri: string) => {
	try {
		const resp = await fetch(fileUri);
		const imageBody = await resp.blob();
		return imageBody;
	} catch (err: any) {
		return new Error(err?.message);
	}
};

export const getExtension = (base64Data: string) => {
	if (base64Data.indexOf(S3BucketBaseUrl) !== -1) {
		return base64Data.split('.').pop();
	}
	return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64')).trim();
};

export const downloadImage = async ({ source, caption }: { source: string; caption: string }) => {
	const url = `https://tanish-app.s3.ap-south-1.amazonaws.com/${source}`;
	const res = await axios({
		url,
		method: 'GET',
		responseType: 'blob',
	}).catch((e) => {
		throw e;
	});

	const fileType = getExtension(url);
	downloadFile({ fileBlob: res?.data, fileName: caption, fileType: fileType || 'png' });
};

const downloadFile = ({ fileBlob, fileName, fileType }: { fileBlob: Blob; fileName: string; fileType: string }) => {
	const url = window.URL.createObjectURL(new Blob([fileBlob]));
	const link = document.createElement('a');
	link.href = url;
	link.setAttribute('download', `${fileName}.${fileType}`);
	document.body.appendChild(link);
	link.click();
	link.remove();
	link.style.display = 'none';
	window.URL.revokeObjectURL(url);
};
