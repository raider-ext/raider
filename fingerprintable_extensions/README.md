# Raider - Results from our Analysis

Here, we provide the list of extensions we found to be fingerprintable for different extension datasets in our study.

## Interpretation of the Results:

Each folder corresponds to the dataset we analyzed in our study. The JSON file provide details of the fingerprintable signatures that we capture in our tests. The data here corresponds to the _Results_ table for the corresponding dataset in the paper (e.g., Table. 2, 3, and 4).

``fingerprintable.json`` - This file includes the final list of extensions for which _Raider_ flags them as __fingerprintable__ based on the uniqueness of the data different fingerprinting vectors discussed in the study. The extensions are grouped for each of the vectors as key-value pairs. The ``NormStacktrace`` key contains extensions that were flagged as fingerprintable after normalizing the stacktrace by removing the extension identifier, and the ``Cross-class`` key includes extensions that showed a unique group of signatures across multiple class of features (e.g., Cookies & Global Variables) and were, thus, fingerprintable. The data here also corresponds to the __Unique__ column in the respective _Results_ tables.
