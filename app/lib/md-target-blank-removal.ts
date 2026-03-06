export const mdTargetBlankRemoval = (msg: string) => {
  if (msg?.indexOf('{:target="_blank"}') > -1) {
    const reg = /{:target="_blank"}/g;
    return msg.replace(reg, "");
  }
  return msg;
};