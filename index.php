<?php include('php/db_connect.php'); ?>
<?php include('php/functions.php'); ?>
<?php  echo "---------------->".single_question("LVM"); all_qheads();  ?>
<!DOCTYPE HTML>
<html>
<head>
<link rel="stylesheet" href="css/style.css" />
<script src="js/main.js"></script>
</head>
<body>
<div class="header">
		<h1>RHCSA EXAM PORTAL</h1>
</div>	
<img id="logo" src="images/redhat.png" alt="RHEL Logo"/>
<h3 class="label1">CERTIFIED</h3>
<h3 class="label2">SYSTEM</h3>
<h3 class="label3">ADMINISTRATOR</h3>
<div class="main">
	<div class="left-panel">
		<label class="timer">Time Left</label>
		<p class="timer" id="timer"><b/>
	</div>
	<div class="review" id="review1">
		<table class="status-table">
			<tr>
				<th>S.No.</th>
				<th>Review</th>
				<th>Done</th>
				<th>Question</th>
			</tr>
			<form method="GET">			
			<script>
			for(var i=1; i<=17; i++){
				document.write("<tr><td>" + i + "</td><td><input type='radio' name='rdb" + i + "' ></td><td><input type='radio' name='rdb" + i + "' ></td><td><input class='qb' type='submit' name='qhead' value='" + QH_ARRAY[i-1] + "' onclick='hide(this)' ></td></tr>");			
			}
			</script>
			</form>
		</table>
	</div>
	<div class="review" id="review2">
		<input class="qb" id="bb" type="button" value="<--" onclick="show(this)">
		<?php
			$qhead = $_GET['qhead'];
			$sql = "SELECT question FROM questions WHERE q_head='$qhead';";
			$result = mysqli_query($con, $sql);
			if (mysqli_num_rows($result) > 0){
				while($row = mysqli_fetch_assoc($result)){
					echo "<h2 id='qh'>" . $qhead . "</h2><p id='question'>" . $row['question'] . "</p>"; 
				}
			}	
		?>
	</div>
</div>
</body>
</html>
<?php mysqli_close($con); ?>

