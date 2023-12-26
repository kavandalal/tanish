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

import { toast } from '@/components/ui/use-toast';

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
