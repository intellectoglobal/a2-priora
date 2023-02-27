from rest_framework import serializers
from . models import ScheduleCourse


class ScheduleCourseSerializer(serializers.ModelSerializer):
    class Meta :
        model = ScheduleCourse
        fields = "__all__"