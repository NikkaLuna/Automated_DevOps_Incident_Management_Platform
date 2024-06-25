@echo off
echo Running Django tests...
call venv\Scripts\activate
python manage.py test
