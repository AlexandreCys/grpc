# Service(Using GRPC)

## GRPC

gRPC is an open source remote procedure call (RPC) system initially developed at Google. It uses HTTP/2 for transport, Protocol Buffers as the interface description language, and provides features such as authentication, bidirectional streaming and flow control, blocking or nonblocking bindings, and cancellation and timeouts. It generates cross-platform client and server bindings for many languages.

## Entity

### __Client__
```
node client/server.js
```
* __Expose__:
  * __REST interface :__ Running on 8080
    * __GET__ /example/1 : Call Server 1(Example1.exampleSimple)
    * __GET__ /example/2 : Call Server 2(Example2.exampleSimple)
  * __GRPC client :__ Connect onµ
      * __Server1__ Running on 5050
      * __Server2__ Running on 6060

### __Server1__
```
node server1/server.js
```
* __Expose__:
  * __GRPC Server :__ Running on 5050
    * __ENDPOINT__ Example1.exampleSimple

### __Server2__
```
node server2/server.js
```
* __Expose__:
  * __GRPC Server :__ Running on 6060
    * __ENDPOINT__ Example2.exampleSimple