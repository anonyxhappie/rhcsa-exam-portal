<?php	

	function single_question($qhead){
		$sql = "SELECT question FROM questions WHERE q_head='$qhead';";		
		$result = mysqli_query($con, $sql);
echo "llllllllllllllllllllllllllll".$result.mysqli_num_rows($result);
		if (mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				echo $row['question']; 
			}
		}else{echo '>>>>>>>>>>>>>>>>>>>>>';}	

	}	
	function all_qheads(){
		$sql = "SELECT q_head FROM questions";
		$result = mysqli_query($con, $sql);
		if (mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				$qheads[] = $row['q_head']; 
			}
		}	
		return $qheads;
	}	
	function all_questions(){
		$sql = "SELECT question FROM questions";
		$result = mysqli_query($con, $sql);
		if (mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				$questions[] = $row['question']; 
			}
		}	
		return $questions;
	}
		
?>
