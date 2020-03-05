module.exports = async () => {
  const content = "内容";

  return {
    msgtype: "markdown",
    markdown: { content }
  };
};
