# Meeting Notes

## Week 3
- Set up React Project for Frontend
- Set up basic backend with Node Express
- Discussed why we should use NGINX
- NGINX as a reverse proxy

## Week 4
- Simple script for raspberry pi to poll an example API every 5 seconds
- Talked about what is a good rate of poll, settled on 5 seconds for now, but 2 seconds when we demo
- Add basic frontend form
- Implemented basic routing for messages in backend
- post to change value of message
- get to retrieve current value of message

## Week 5
- Added api POST Request Calls with Axios
- Talked about requirements for which routes to implement
- Added timestamps to api to keep track of the current time and when the message is updated
- Set up NGINX to connect with backend and production React files

## Week 6
- Tested out deployment on AWS.  Findings:
- App was successfully deployed and can be accessed via a public IP.
- The instance would shut down after a certain amount of seconds.
- Is it due to the instance being t2.micro?
- Docker compose optimizations
- Worked on developing a method to ensure that really long messages have line breaks
- The e-ink does not have automatic line breaking, so really long messages stay on one line and go off the screen.
- Fix NGINX bug related to connecting to backend on server

## Week 7
- Deployment takes too long
- Need to rebuild frontend for nginx
- Need to install dependencies
- Make a script to automate build and deploy?
  
## Week 8
- allow images to be uploaded to backend


## Week 9
- Deployment attempts round 2:
- T2.medium worked and doesn’t shut down!!
- Images are possible, but require some considerations:
- The PI must know whether the most recent message is an image or text
- The images must be 400x300
- Only one image must be stored at a time for simplicity

## Week 10
- Discussed how we are going to do the final presentation
- Slides format follow similar in-person slide format
- Demo video will be longer and more detailed.
- Implementation details can be mentioned
- Final Writeup can be done asynchronously

