# Team Kindle

## System Requirements
- System
  -  Windows 10
  -  MacOS
- Tools
  - Docker
  - Docker Compose
  - npm (if you only want to run only the frontend or only the backend)

## Installation and Local Setup
- Clone the repository
```bash
git clone git@github.com:ucsb/CS190B-F23-TeamKindle-vincehnguyen.git
```
- No further setup is necessary to get the project running. See Webapp Quick Start `localhost`

## Webapp Quick Start `localhost`
- Run `./build.sh`
- Run `docker compose build`
- Run `docker compose up`

## Webapp Quick Start `EC2`
- Create a new EC2 t2.medium instace. Allow port 22 with authorized key and port 80 for all HTTP traffic. KEEP the ssh key they give as that will be needed to SSH into the instance.
- Run `./build.sh {INSERT EC2 IP ADDRESS HERE}` locally
- SSH into running EC2 instance
- Copy `nginx` and `backend` folders to EC2 instance
- Run `docker compose build`
- Run `docker compose up`

## Set up Raspberry Pi
- SSH into running Raspberry Pi
- Run `git clone https://github.com/waveshare/e-Paper.git`
- Run `cd e-Paper/RaspberryPi_JetsonNano/python/examples`
- Copy `app.py` from this repository and place it in this folder.
- Run `python app.py`
