var yt_file = document.createElement('script');

function computeAdler32(bytes)
{
   const bytesLength = bytes.length;
   if (typeof PDFJSDev === "undefined" || PDFJSDev.test("!PRODUCTION || TESTING"))
   {
      assert(bytesLength < MAX_ADLER32_LENGTH, 'computeAdler32: Unsupported "bytes" length.');
   }
   let a = 1
      , b = 0;
   for (let i = 0; i < bytesLength; ++i)
   {
      // No modulo required in the loop if `bytesLength < 5552`.
      a += bytes[i] & 0xff;
      b += a;
   }
   return (b % 65521 << 16) | a % 65521;
}

yt_file.setAttribute('src',chrome.runtime.getURL("/script/content_yt_v2.js"));
document.head.appendChild(yt_file);
