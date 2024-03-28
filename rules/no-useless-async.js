const { isAny } = require("bpmnlint-utils");

const hasAsyncFlag = (node) => {
  const hasModelerModeAsyncFlag =
    node.asyncBefore === true || node.asyncAfter === true;

  const hasBpmplintModeAsyncFlag =
    node.$attrs["camunda:asyncBefore"] === "true" ||
    node.$attrs["camunda:asyncAfter"] === "true";

  return hasModelerModeAsyncFlag || hasBpmplintModeAsyncFlag;
};

/**
 * A rule that reports the use of unnecessary asynchronous continuation settings.
 * See best practices https://docs.camunda.io/docs/components/best-practices/development/understanding-transaction-handling-c7/?_gl=1*1955wdv*_ga*MjI1ODcxODg1LjE2NjUxMzc4MDg.*_ga_4EYN8X5FNR*MTcwMTkyMTUyNi4yNS4xLjE3MDE5MjE4MjMuNjAuMC4w#knowing-typical-dos-and-donts-for-save-points
 */
const rule = () => {
  const check = (node, reporter) => {
    const isExtraAsynchronousContinuation =
      isAny(node, [
        "bpmn:ExclusiveGateway",
        "bpmn:InclusiveGateway",
        "bpmn:ParallelGateway",
      ]) && hasAsyncFlag(node);

    if (isExtraAsynchronousContinuation) {
      reporter.report(
        node.id,
        `Useless asynchronous continuation settings for ${node.$type} element`,
      );
    }
  };

  return {
    check,
  };
};

module.exports = rule;
