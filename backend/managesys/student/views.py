from django.shortcuts import render
from django.http import JsonResponse
from .forms import StudentForm
from .forms import StudentDelete
from .forms import StudentUpdate
from .forms import Studentupd
from .models import Student

from rest_framework import generics
from .serializers import studentSerializer
# Create your views here.
def home(req):
    print(req)
    return render(req, 'home.html')

def AddStudent(req):
    return render(req, 'student_add.html',{"form":StudentForm})
def UpdateStudent(req):
    if req.method == 'POST':
        id = req.POST.get('UID')
        student= Student.objects.get(id=id)
        return render(req, 'student_update.html',{"form":StudentUpdate,"std":student})
def StudentAdd(req):
    if req.method == 'POST':
        name = req.POST.get('name')
        id = req.POST.get('id')
        course = req.POST.get('course')
        joindate = req.POST.get('joindate')
        fee = req.POST.get('fee')
        student = Student(name=name, id=id, course=course, joindate=joindate, fee=fee)
        student.save()
        return render(req, 'student_success.html')
    else:
       return render(req, 'student_add.html',{"form":StudentForm})
def StudentUpdater(req):
    if req.method == 'POST':
        name = req.POST.get('name')
        id = req.POST.get('UID')
        course = req.POST.get('course')
        joindate = req.POST.get('joindate')
        fee = req.POST.get('fee')
        student= Student.objects.get(id=id)
        student.name=name
        student.course=course
        student.joindate=joindate
        student.fee=fee
        student.save()
        return render(req, 'updated.html')
    else:
        return render(req, 'student_update.html')
def allStudents(req):
    data = Student.objects.all()
    return render(req, 'students.html',{"data":data,"del":StudentDelete,"upd":Studentupd})

# Reset Api

class serializeStudents(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class=studentSerializer

def StudentDelete(req):
    if req.method == 'POST':
        id = req.POST.get('UID')
        Student.objects.filter(id=id).delete()
        return render(req, 'student_deleted.html')
