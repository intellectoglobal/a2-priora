from django.urls import path
from .views import ScheduleCourseView

# Creating a url for the view.
urlpatterns = [
    path('schedule_course', ScheduleCourseView.as_view()),
    path('scheduled_course', ScheduleCourseView.as_view()),

]
