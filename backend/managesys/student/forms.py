from django.forms import ModelForm
from .models import Student

class StudentForm(ModelForm):
    # specify the name of model to use
    class Meta:
        model = Student
        fields = ["id","name","course","joindate","fee"]

class StudentUpdate(ModelForm):
    # specify the name of model to use
    class Meta:
        model = Student
        fields = ["name","course","joindate","fee"]

class StudentDelete(ModelForm):
    # specify the name of model to use
    class Meta:
        model = Student
        fields = []
class Studentupd(ModelForm):
    # specify the name of model to use
    class Meta:
        model = Student
        fields = []