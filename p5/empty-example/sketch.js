function setup() {
  // put setup code here
  var editorElement = document.getElementById('editor');

    MyScript.register(editorElement, {
      recognitionParams: {
        type: 'MATH',
        server: {
          applicationKey: '#YOUR MYSCRIPT CDK APPLICATION KEY#',
          hmacKey: '#YOUR MYSCRIPT CDK HMAC KEY#'
        }
      }
    });

function draw() {
  // put drawing code here
}
