<!DOCTYPE html>
<html lang="en">
  <?php include 'components/head.shtml' ?>
  <body>
    <h1 class="text-center heading">Fun Time Magic Show!</h1>
    <?php include 'components/navigation.shtml' ?>
    <div class="container">
      <h2>Book your Party now!</h2>
      <p class="lead">
        To book your party please use the form below and we'll get back to you
        very shortly. Or if you would like to contact Michael directly you can email him at <a href="mailto:funtimemagicshow@yahoo.co.uk">funtimemagicshow@yahoo.co.uk</a>
      </p>
      <p class="help-block">Fields with the <sup>*</sup> must be filled out.</p>
      <form action="process_booking.php" role="form" class="form-horizontal" method="POST">
        <div class="form-group">
          <label for="user-given-name">Your first name: <sup>*</sup></label>
          <input type="text" class="form-control" required id="user-given-name" name="user-given-name">
        </div>
        <div class="form-group">
          <label for="user-family-name">Your family name: <sup>*</sup></label>
          <input type="text" class="form-control" required id="user-family-name" name="user-family-name">
        </div>
        <div class="form-group">
          <label for="child-given-name">Your child's first name: <sup>*</sup></label>
          <input type="text" class="form-control" required id="child-given-name" name="child-given-name">
        </div>
        <div class="form-group">
          <label for="email-address">Your email address: <sup>*</sup></label>
          <input type="email" class="form-control" required id="email-address" name="email-address">
        </div>
        <div class="form-group">
          <label for="date">When would you like to have the party? <sup>*</sup></label>
          <input type="date" required name="date" id="date">
        </div>
        <div class="form-group">
          <!-- <p class="help-block">Please fill in the words below. This is to prevent spam and make
            sure you are human!</p> -->
          <?php
            //require_once('../assets/recaptchalib.php');
            //$publickey = "6Lez7u0SAAAAAL0HqqRIVRUJTqHg4pRBgadOZhx4";
            //echo recaptcha_get_html($publickey);
          ?>
        </div>
        <input type="submit" name="submit" value="Book party" class="btn btn-default btn-primary btn-lg">
        <input type="reset" name="reset" value="Start again" class="btn btn-default btn-danger btn-lg">
      </form>
    </div>
    <?php include 'components/footer.shtml' ?>
  </body>
</html>