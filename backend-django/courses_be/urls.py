from django.urls import path
from .views import (ListOfCourseView, AddNewCourseView, CertificateStatus,
                    ParticipantDetailsView, PaymentView, PaymentReceiptView)


urlpatterns = [
    path('course_list/<int:id>', ListOfCourseView.as_view()),
    path('add_course', AddNewCourseView.as_view()),
    path('certificate/<int:id>', CertificateStatus.as_view()),
    path('certificate/<int:id>/update', CertificateStatus.as_view()),
    path('payment/<int:id>', PaymentView.as_view()),
    path('payment/<int:id>/update', PaymentView.as_view()),
    path('payment_reciept/<int:id>', PaymentReceiptView.as_view()),
    path('payment_reciept/<int:id>/update', PaymentReceiptView.as_view()),
    path('participant_details/<int:id>', ParticipantDetailsView.as_view()),
    path('participant_details/<int:id>/update',
         ParticipantDetailsView.as_view()),
]
