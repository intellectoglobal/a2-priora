from django.db import models
from payment.models import Payment
from courses_be.models import NewCourse
membership_type = (
    ('Self', 'Self'),
    ('Company', 'Company')
)


class CourseRegister(models.Model):
    register_id = models.AutoField(
        db_column='register_id', primary_key=True, blank=False)
    selected_course = models.ForeignKey(
        NewCourse, models.PROTECT, db_column='selected_course', blank=False)
    applicant_name = models.CharField(
        db_column='applicant_name', max_length=20, blank=False)
    contact_no = models.IntegerField(
        db_column='contact_no', blank=False)
    email = models.EmailField(db_column='email', blank=False)
    alternative_email = models.EmailField(
        db_column='alternative_email', blank=True)
    address = models.CharField(db_column='address', max_length=50, blank=False)
    postal_code = models.IntegerField(db_column='postal_code', blank=False )
    FIN_NRIC_Passport_no = models.IntegerField(
        db_column='FIN_NRIC_Passport_no', blank=False)
    company_name = models.CharField(
        db_column='company_name', max_length=30, blank=False)
    membership_type = models.CharField(
        db_column='membership_type', max_length=20, default='Self', choices=membership_type, blank=False)
    membership_no = models.IntegerField(
        db_column='membership_no',   blank=False)
    payment = models.ForeignKey(Payment, models.PROTECT, db_column='payment' , blank=False)

    class Meta:
        db_table = 'course_register'
