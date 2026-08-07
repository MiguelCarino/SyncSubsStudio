# Third-party code bundled here

Everything this project needs is vendored: it loads no script, style, font, map
or module from anywhere but its own origin — no CDN, no network, no account.
That is the point of the tool, and it makes the licences below *this project's*
responsibility rather than a package manager's.

Each entry records what the file itself declares. Where the shipped file carries
no licence header, the row says so and names the upstream licence to confirm
against the release it was taken from — **confirm those before a release that
someone else redistributes.**

Speech and translation models run locally in WebAssembly, which is why this tree
is large and why nothing here calls out to an API.

## What is here, and under what licence

| File | Package | Licence | Declared in the file? |
| --- | --- | --- | --- |
| `transformers/transformers.min.js` | [Transformers.js](https://github.com/huggingface/transformers.js) | Apache-2.0 | No header in the minified build — upstream is Apache-2.0 |
| `transformers/ort-wasm*.wasm` | [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) | MIT | No — binary artefacts; upstream ONNX Runtime is MIT |

## The rule

Adding a file to this directory means adding a row here **in the same commit**.
A record kept from the first vendored file is trivial; one reconstructed two
years later is not.
