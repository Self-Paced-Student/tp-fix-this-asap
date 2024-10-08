
// Fix this asap (30 mins)

// We have received the following e-mail from the support team:
//
// Hi techies! One of our clients is complaining about the
// billing section of our app. He says that the tax of his
// last invoice appears to be 0.020000000000000004 while it should
// be 0.02. Can you please check the tax computation, and make sure
// we don't get this problem in the future by completing the tests?
//
// P.S. Fix this asap

function calcTax (base) {
  var padding = 100;
  return ((base*padding)*0.2)/padding;
}

module.exports = calcTax;