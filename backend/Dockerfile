FROM python:3.10.6-slim-bullseye

WORKDIR /dbs_webapp
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "./app.py" ]
