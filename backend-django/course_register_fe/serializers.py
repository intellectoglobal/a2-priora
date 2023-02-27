from rest_framework import serializers
from . models import CourseRegister

class CourseRegister(serializers.ModelSerializer):
    class Meta :
        model = CourseRegister
        fields = "__all__"