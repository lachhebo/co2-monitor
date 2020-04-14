# co2-monitor

a chrome extension to monitor how much co2 was generated during your navigation on the web 


## how co2 emission are assessed ? 


As many parameters need to be taken into account in the co2 emission equation, it is almost impossible to know exactly how much co2 has been produced by your daily internet usage; some of them are : 

- your computer electrical consommation.
- the carbon intensity of the electricity you're using. 
- the server which of the website you're visiting. 

My first idea was to used the user location, the carbon intensity of the electrical grid in the country he lived on, the cpu he used and how much data was passing though chrome to obtain a rough estimation. However this implementation has two major downsides :
-  it was not taking into account the carbon intensity of the datacenter.
- the parameter used were not really at the hand of the user, so it would be hard for him to optimize his co2 emission relative to his daily browsing. 

As i discovered the API of wholegrain, i used it on around 50 most visited website (according to alexa and similarweb) to obtain a rough estimation of how much co2 was produced by visiting each of those website. Actually, three information   
have focused my attention : 

- the co2 produced by visiting one page of the given website.
- the size of the bytes transferred between my computer and the given website.
- the energy used to load the page.    

I averaged those number to obtain a mean co2 emission for a certain data bytes size transferred. Hence, when you're visiting one of the given website, the extension is using the data which is passing through the wire and the known co2 emission for a certain data bytes size to obtain a rough co2 emission estimation. When you're navigation and on unknown website, the extension is using the mean result.


## resources

Wholegrain API is used to obtain a rough estimation of the carbon intensity of a list of some most visited websites : 

- [Wholegrain Carbon API](https://www.websitecarbon.com/)


### support 


[<img height="30" src="https://raw.githubusercontent.com/lachhebo/GabTag/screenshots/donate.png" alt="PayPal"/>](https://www.paypal.me/lachhebo)
