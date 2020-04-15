# co2-monitor
a chrome extension to monitor how much co2 was generated during your navigation on the web.

## how co2 emissions are assessed ?
As many parameters need to be taken into account in the co2 emission equation, it is almost impossible to know exactly how much co2 has been produced by your daily internet usage; although, some of them are :

- your computer energy consumption.
- the carbon intensity of the electricity you're using.
- the website's servers carbon intensity.

My first idea was to use the user location, the carbon intensity of the electrical grid in the country he lives in, the cpu he uses and how much data is passing though chrome to obtain a rough estimation. However, this implementation has two major downsides :

- it is not taking into account the carbon intensity of the data center.
- the parameter used is not really at the hand of the user, so it would be hard for him to optimize his co2 emissions related to his daily browsing.

As I discovered the API of wholegrain, I used it on around 50 most visited websites (according to alexa and similarweb) to obtain a rough estimation of how much co2 is produced when visiting each of those websites. Actually, three attributes have caught my attention for each website:

- the co2 produced by visiting one page.
- the size of the bytes transferred between my computer and the website.
- the energy used to load the page.

When you're visiting one of the given website, the extension is using the data which are passing through the wire and the known co2 emissions for a certain data byte size to obtain a rough co2 emissions estimation. 
When you're navigating on unknown website, the extension is using the average result.

I averaged the numbers obtained with the 50 websites. Hence, when you are visiting unknown website, the extension is using the average numbers to compute the co2-emissions.

## resources
Wholegrain API is used to obtain a rough estimation of the carbon intensity of a list of some most visited websites :

- [Wholegrain Carbon API](https://www.websitecarbon.com/)


### support/donation


[<img height="30" src="https://raw.githubusercontent.com/lachhebo/GabTag/screenshots/donate.png" alt="PayPal"/>](https://www.paypal.me/lachhebo)
