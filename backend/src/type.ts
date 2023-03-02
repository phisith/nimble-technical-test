declare global {
  interface BigInt {
    toJSON(): string;
  }
}
export const globalType = () => {
  BigInt.prototype.toJSON = function (): string {
    return this.toString();
  };
};
