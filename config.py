import os



class Config(object):
    DEBUG = False
    TESTING = False
    #CSRF_ENABLED = True
    #SECRET_KEY = "secret_key"



class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True
