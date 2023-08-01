<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>

<!-- header head -->
<?php
	include_once 'includes/header-includes.php';
?>
<!--close  header head -->

</head>

<body>
	<div id="wrapper">

		<div class="main-wrapper black">
			<!-- Header -->
			<?php
				include_once 'includes/header.php';
			?>
			<!--close Header -->


			<section class="contact-sec">
				<div class="container">
					<div class="sec-heading">
						<h2>Let's Start a Conversation</h2>
						<p>We're excited to hear from you and discuss how we can support your business growth and transformation. Don't hesitate to get in touch using one of the following contact methods:</p>
					</div>

					<div class="contact-form">
						<form>
							<div class="field-row filed-2-row">
								<div class="field">
									<input type="text" name="name" placeholder="Name">
								</div>
								<div class="field">
									<input type="email" name="email" placeholder="Email">
								</div>
							</div>

							<div class="field-row filed-2-row">
								<div class="field">
									<input type="text" name="phone" placeholder="Phone">
								</div>
								<div class="field">
									<input type="text" name="text" placeholder="Location">
								</div>
							</div>

							<div class="field-row field-mgs">
								<textarea placeholder="Message..."></textarea>
							</div>

							<div class="field">
								<button type="button" class="btn">Submit</button>
							</div>
						</form>
					</div>


					<div class="address-block">
						<div class="sec-heading">
							<h2>Our Locations</h2>
						</div>
						<div class="address-box">
							<h3>Surat</h3>
							<a href="#0">526, MBC, Lajamni Chowk, opposite Opera Business center, Shanti Niketan Society, Mota Varachha, Surat,Gujarat 394105</a>
						</div>
						<div class="address-box">
							<h3>Email</h3>
							<a href="mailto:contact@hideinfotech.com">contact@hideinfotech.com</a>
						</div>
						<div class="address-box">
							<h3>Phone</h3>
							<a href="tel:9879092355">+91 987 909 2355</a>
							<a href="tel:9727998282">+91 97279 98282</a>
						</div>
						<div class="address-box">
							<h3>Social</h3>
							<div class="address-social">
								<?php
									include 'includes/social.php';
								 ?>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
			<!--footer -->
			 <?php
					include_once 'includes/footer.php';
			 ?>
			<!--close footer -->
	</div>

 <!--footer scrpit -->
<?php
	include_once 'includes/footer-includes.php';
 ?>
 <!--close footer scrpit -->

</body>
</html>
