# No useless async (no-useless-async)

Don't configure save points before all forking and exclusively joining gateways.
There should just be no need to do that, unless execution listeners are
configured at such points, which could fail and might need to be transactionally
separated from other parts of the execution
See best
practice [Understanding Camunda 7 transaction handling](https://docs.camunda.io/docs/components/best-practices/development/understanding-transaction-handling-c7/#knowing-typical-dos-and-donts-for-save-points)

Example of **incorrect** usage for this rule:

![Incorrect usage exclusive gateway example](./examples/exclusive_gateway_async_bad.png)

```xml

<bpmn:exclusiveGateway id="Gateway_0t3vogs" camunda:asyncBefore="true">
</bpmn:exclusiveGateway>
```

![Incorrect usage inclusive gateway example](./examples/inclusive_gateway_async_bad.png)

```xml

<bpmn:inclusiveGateway id="Gateway_02dmbci" camunda:asyncBefore="true">
</bpmn:inclusiveGateway>
```

![Incorrect usage parallel gateway example](./examples/parallel_gateway_async_bad.png)

```xml

<bpmn:parallelGateway id="Gateway_1iescjs" camunda:asyncBefore="true">
</bpmn:parallelGateway>
```

Example of **correct** usage for this rule:

![Correct usage exclusive gateway example](./examples/exclusive_gateway_async_good.png)

```xml

<bpmn:exclusiveGateway id="Gateway_0t3vogs">
</bpmn:exclusiveGateway>
```

![Correct usage inclusive gateway example](./examples/inclusive_gateway_async_good.png)

```xml

<bpmn:inclusiveGateway id="Gateway_02dmbci">
</bpmn:inclusiveGateway>
```

![Correct usage parallel gateway example](./examples/parallel_gateway_async_good.png)

```xml

<bpmn:parallelGateway id="Gateway_1iescjs">
</bpmn:parallelGateway>
```
