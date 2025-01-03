type FileData = {
  name: string;
  type: string;
  size: number;
  arrayBuffer: () => Promise<ArrayBuffer>;
};

interface ParsedData {
  fields: { [key: string]: string[] };
  files: { [key: string]: FileData[] };
}

export async function parseMultipartFormData(formData: FormData): Promise<ParsedData> {
  const fields: { [key: string]: string[] } = {};
  const files: { [key: string]: FileData[] } = {};

  for (const [key, value] of formData.entries()) {
    if (typeof value === 'object' && 'arrayBuffer' in value && 'name' in value) {
      if (!files[key]) {
        files[key] = [];
      }
      files[key].push({
        name: value.name,
        type: value.type,
        size: value.size,
        arrayBuffer: () => (value as Blob).arrayBuffer(),
      });
    } else {
      if (!fields[key]) {
        fields[key] = [];
      }
      fields[key].push(value.toString());
    }
  }

  return { fields, files };
}

