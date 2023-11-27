#!/usr/bin/python
""" Catering catagory"""
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship


class Catering(BaseModel, Base):
    """Representation of catering"""