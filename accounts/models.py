from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

GENDER_CHOICES = (
    ('a', 'Male'),
    ('b', 'Female')
)

WORKOUT_LVL_CHOICES = (
    ('1.2', 'sedentary (little to no exercise)'),
    ('1.375', 'lightly active (light exercise 1–3 days per week'),
    ('1.55', 'moderately active (moderate exercise 3–5 days per week'),
    ('1.725', 'very active (hard exercise 6–7 days per week'),
    ('1.9', 'extra active (very hard exercise, training, or a physical job'),
)


class Profile(models.Model):
    active = models.BooleanField(default=True)
    public = models.BooleanField(default=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    birth = models.DateField(blank=True)
    weight = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    height = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    bmi = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='a')
    workout_lvl = models.CharField(max_length=5, choices=WORKOUT_LVL_CHOICES, default='a')

    def __str__(self):
        return f'Profile - {self.user.username}'

    def get_age(self):
        return 50

    def find_bmi(self):
        return (self.weight/(self.height)*(self.height)) * 703 if self.height != 0 else 0

    def find_bmr(self):
        if self.gender == 'a':
            return 66 + (6.2 * self.weight) + (12.7 * self.height) - (6.76 * self.get_age())
        else:
            return 655.1 + (4.35 * self.weight) + (4.7 * self.height) - (4.7 * self.get_age())

    def get_calories(self):
        return self.find_bmr() * self.workout_lvl

