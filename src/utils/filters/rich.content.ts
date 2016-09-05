richContentFilter.$inject = ['$sce'];

export function richContentFilter($sce: ng.ISCEService): (input: string) => string {
  return (input: string) => {
    if (!isUrl(input)) {
      return input;
    } else if (!isImage(input)) {
      return $sce.trustAsHtml(`<a href="${input}">${input}</a>`);
    } else {
      return $sce.trustAsHtml(`<img src="${input}" />`);
    }
  };

  function isUrl(input: string): boolean {
    // there is probably a better regex or lib for this TODO
    return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(input);
  }

  function isImage(url: string): boolean {
    // we assume links ending with common image-like extensions are images
    // this should be improved TODO
    let parts = url.split('/');

    if (parts.length <= 3) {
      return false;
    }

    let file = parts.pop();
    let extension = file.split('.').pop();

    if (extension === file) {
      // no extension
      return false;
    }

    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return true;
      default:
        return false;
    }
  }
}
