from time import sleep
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import warnings
import random


class E2eProfile(unittest.TestCase):

    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_argument('--log-level=3')
        options.add_argument('--headless')
        options.add_experimental_option('excludeSwitches', ['enable-logging'])
        service = Service('C://chromedriver.exe')
        self.driver = webdriver.Chrome(service = service, options=options)

    def test_1profile_btn_existence(self):
        warnings.simplefilter("ignore")
        driver = self.driver
        driver.get("http://localhost:3000/")
        try:
            profile_btn = driver.find_element(By.CLASS_NAME, 'header-profile-btn')
        except:
            profile_btn = False
        self.assertTrue(profile_btn,'Butonul de profil nu exista')
        print("Butonul de Profil există")

    def test_2profile_btn_click_links_to_profile(self):
        warnings.simplefilter("ignore")
        driver = self.driver
        driver.get("http://localhost:3000/")
        driver.find_element(By.CLASS_NAME, 'header-profile-btn').click()
        self.assertIn('profile',driver.current_url, 'Butonul de profil nu duce pe /profile')
        print("Butonul de profil duce pe /profile")


    def test_3_no_jwt_loads_signin(self):
        warnings.simplefilter("ignore")
        driver = self.driver
        driver.get("http://localhost:3000/profile")
        jwt = driver.execute_script('return localStorage.getItem("authToken");')
        try:
            signin_page_wrapper = driver.find_element(By.CLASS_NAME, 'signin-page-wrapper')
        except:
            signin_page_wrapper = False
        self.assertTrue(signin_page_wrapper,'Nu suntem pe pagina de signin exista')
        print('jwt: ' + str(jwt) +" Suntem pe pagina de signin")

    def test_4_register(self):
        warnings.simplefilter("ignore")
        driver = self.driver
        driver.get("http://localhost:3000/profile")
        name = 'Selenium'
        email = f'{random.random()}@auto_test.com'
        password = 'pass'
        print(email)
        email_el = driver.find_element(By.ID, 'sign-in-email')
        name_el = driver.find_element(By.ID, 'sign-in-name')
        password_el = driver.find_element(By.ID, 'sign-in-password')
        email_el.send_keys(email)
        name_el.send_keys(name)
        password_el.send_keys(password)
        driver.find_element(By.ID, 'sign-up').submit()
        sleep(1)
        jwt = driver.execute_script('return localStorage.getItem("authToken");')
        try:
            section_el = driver.find_element(By.CLASS_NAME, 'profile-section-1')
        except:
            section_el = False
        self.assertTrue(section_el, 'Nu s-a realizat cu succes înregistrarea')
        print("Înregistrarea a avut succes. Suntem pe /profile. JWT: " + jwt)

    def test_5_sign_in(self):
        warnings.simplefilter("ignore")
        driver = self.driver
        driver.get("http://localhost:3000/profile")
        email = 'sebi@mii.imgag.com'
        password = 'pass'
        email_el = driver.find_element(By.ID, 'log-in-email')
        password_el = driver.find_element(By.ID, 'log-in-password')
        email_el.send_keys(email)
        password_el.send_keys(password)
        driver.find_element(By.ID, 'log-in').submit()
        sleep(1)
        jwt = driver.execute_script('return localStorage.getItem("authToken");')
        try:
            section_el = driver.find_element(By.CLASS_NAME, 'profile-section-1')
        except:
            section_el = False
        self.assertTrue(section_el, 'Nu s-a realizat cu succes logarea')
        print("Logarea a avut succes. Suntem pe /profile. JWT: " + jwt)



    def tearDown(self):
        self.driver.close()


if __name__ == "__main__":
    warnings.simplefilter("ignore")
    unittest.main()