from django.db import models
# Id,name,course,joindate,fee, duration
# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=100)
    course=models.CharField(max_length=100)
    joindate=models.DateField()
    fee=models.IntegerField()
    def __str__(self):
        return self.name
    
    