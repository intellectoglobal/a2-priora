from django.urls import path
from .views import ScheduleCourseView

urlpatterns = [
    path('schedule_course', ScheduleCourseView.as_view()),
    path('schedule_course/<int:id>', ScheduleCourseView.as_view()),

]
