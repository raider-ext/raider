# Raider

## Peeking through the ``window``: Fingerprinting Browser Extensions through Page-Visible Execution Traces and Interactions

The extensions in this directory correspond to our findings from the analysis on the _Raider_ dataset and are examples of reported fingerprintable extensions. Each of these extensions exhibit **at least** one fingerprintable behavior at runtime that we discuss in our study, and allow the Web attackers to fingerprint them consistently on each visit.

Please find the corresponding fingerprinting vector reported for each of these extensions here:

|           Extension ID           |                Vector               |
|:---------------------------------|------------------------------------:|
| dagcmkpagjlhakfdhnbomgmjdpkdklff |                          Stack Trace|
| hablalfioeaeegjdjnadoakdhleccbgn  |                    Norm. Stack Trace|
| njkmjblmcfiobddjgebnoeldkjcplfjb  |                            Arguments|
| dfjbpjcgbmpmjacdgflidcbdojphlhmd  |                               Caller|
| eijaliiajnchgljfcjdagllhbfkdkmmi |                            IndexedDB|
| noaijdpnepcgjemiklgfkcfbkokogabh |                              Cookies|
| oakbcaafbicdddpdlhbchhpblmhefngh |                            Variables|
| bpiohchncadidhohcajcnoelomephkdd |                              Storage|
| bflolcmnokpcochfhappdfipeficedjf    |                          PostMessage|
| hifafgmccdpekplomjjkcfgodnhcellj | Cross-class (StackTrace & Variables)|

---