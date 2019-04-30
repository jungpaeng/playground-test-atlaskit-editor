export const uploadFile = (
  files: FileList,
  multiple: boolean,
  onChange: (fileList: File[]) => void
) => {
  const fileList: File[] = [];

  Object.keys(files).forEach(idx => {
    const _idx = Number(idx);
    const file = files[_idx];

    if (!isNaN(_idx)) {
      if (multiple) {
        fileList.push(file);
      } else {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          const fileList: File[] = [file];

          onChange && onChange(fileList);
        };
      }
    }
  });

  if (multiple) {
    onChange && onChange(fileList);
  }
};
