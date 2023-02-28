from django.urls import path
from .views import (CourseRegisterView, CourseMenuView,
                    UserSelectedCourseView, CourseInvoiceView)

urlpatterns = [

    path('course_register/<int:id>', CourseMenuView.as_view()),
    path('course_register', CourseRegisterView.as_view()),
    path('course_register/<int:id>', UserSelectedCourseView.as_view()),
    path('course_register/<int:id>/delete', UserSelectedCourseView.as_view()),
    path('course_register/<int:id>', CourseInvoiceView.as_view())

]
