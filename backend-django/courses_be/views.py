from django.shortcuts import render
from rest_framework.response import Response
from .serializers import NewCourseSerializer
from .serializers import CourseRegisterSerializer
from course_register_fe.models import CourseRegister
from .models import NewCourse
from payment.models import Payment
from schedule_courses_be.models import ScheduleCourse
from rest_framework.views import APIView

# Create your views here.
class NewCourseView(APIView):
    serializer_class = NewCourseSerializer

    def get(self, request, *args, **kwargs):
        if request.method == 'GET':
            datas = ScheduleCourse.objects.all()
            data = [{
                    "Date" : i.course_addded_date,
                    "Course Title" : i.course_title,
                    "Seats" : i.max_seat,
                    "Booked" : "",
                    }
             for i in datas]
        return Response(data)
    

class ListOfCourseView(APIView):
    serializer_class = NewCourseSerializer

    def get(self, request, *args, **kwargs):
        if request.method == 'GET':
            datas = ScheduleCourse.objects.all()
            data = [{
                    "Date" : i.course_addded_date,
                    "Course Title" : i.course_title,
                    "Total No of participants": "",
                    "Run" : i.run,
                    "Scheduled status" : "",
                    "View status" : i.visibility,
                    }
                for i in datas]
        return Response(data)
    
class AddCourseView(APIView):
    serializer_class = NewCourseSerializer

    def post(self, request, *args, **kwargs):
            data = request.data
            serializer = NewCourseSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
            return Response({"Response" : "Course is successfully registered.","data" : serializer.data})
    

    def get(self, request, *args, **kwargs):
        if request.method == 'GET':
            datas = NewCourseSerializer.objects.all()
            data = [{
                    "Course title" : i.course_title,
                    "Run" : i.run,
                    "Date" : i.course_addded_date,
                    "Reg date" : "",
                    "Name" : i.applicant_name,
                    "FIN no" : i.FIN_NRIC_Passport_no,
                    "Contact no" : i.contact_no,
                    "E-mail" : i.email,
                    "Payment method" : i.payment_mode,
                    "Cert Status" : i.certificate_email,
                    }
                for i in datas]
        return Response(data)
    
    def put(self, request, id, *args, **kwargs):
        data = request.data
        UpdateCourse = NewCourse.objects.get(id=id)
        serializer = NewCourseSerializer(instance=UpdateCourse, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Course is Successfully Updated", "data": serializer.data})
    

class PaymentView(APIView):
    serializer_class = NewCourseSerializer

    def get(self, request, *args, **kwargs):
        if request.method == 'GET':
            datas = NewCourseSerializer.objects.all()
            data = [{
                    "Date" : i.course_addded_date,
                    "Course" : i.course_title,
                    "Name" : i.applicant_name,
                    "FIN no" : i.FIN_NRIC_Passport_no,
                    "E-mail" : i.email,
                    "Payment method" : i.payment_mode,
                    "Pay status" : i.payment_status,
                    "Sent status" : i.payment_status,
                    }
                for i in datas]
        return Response(data)
    
    def put(self, request, id, *args, **kwargs):
        data = request.data
        UpdatePayment = NewCourse.objects.get(id=id)
        serializer = NewCourseSerializer(instance=UpdatePayment, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Payment is Successfully Updated", "data": serializer.data})
    

class PaymentReceiptView(APIView):
    serializer_class = NewCourseSerializer

    def get(self, request, *args, **kwargs):
        if request.method == 'GET':
            datas = NewCourseSerializer.objects.all()
            data = [{
                    "Course title" : i.course_title,
                    "Run" : i.run,
                    "Date" : i.course_addded_date,
                    "Reg date" : "",
                    "Name" : i.applicant_name,
                    "FIN no" : i.FIN_NRIC_Passport_no,
                    "Contact no" : i.contact_no,
                    "E-mail" : i.email,
                    "Payment method" : i.payment_mode,
                    "Status" : i.payment_status,
                    "Invoice" : i.payment_receipt,
                    "Receipt" : i.payment_receipt,
                    }
                for i in datas]
        return Response(data)
    
    def put(self, request, id, *args, **kwargs):
        data = request.data
        UpdateInvoice = NewCourse.objects.get(id=id)
        serializer = NewCourseSerializer(instance=UpdateInvoice, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Receipt is Successfully Updated", "data": serializer.data})
    


    
class ParticiapantDetailsView(APIView):
    serializer_class = NewCourseSerializer

    def get(self, request, *args, **kwargs):
        if request.method == 'GET':
            datas = NewCourseSerializer.objects.all()
            data = [{
                    "Course title" : i.course_title,
                    "Run" : i.run,
                    "Date" : i.course_addded_date,
                    "Reg date" : "",
                    "Name" : i.applicant_name,
                    "FIN no" : i.FIN_NRIC_Passport_no,
                    "Contact no" : i.contact_no,
                    "E-mail" : i.email,
                    "Payment method" : i.payment_mode,
                    "Status" : i.certificate_email,
                    "Certificate" : i.certificate_code,
                    }
                for i in datas]
        return Response(data)
    
    def put(self, request, id, *args, **kwargs):
        data = request.data
        ParticipantDetails = NewCourse.objects.get(id=id)
        serializer = NewCourseSerializer(instance=ParticipantDetails, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Participant Details are Successfully Updated", "data": serializer.data})