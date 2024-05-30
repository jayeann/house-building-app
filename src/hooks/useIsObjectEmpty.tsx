export default function useIsObjectEmpty(obj: {}) {
  return Object.keys(obj).length === 0;
}
