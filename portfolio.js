function changeColor(btnId,menu)
                {
			var menuElements=document.getElementsByClassName(menu);
			for(var i=0;i<menuElements.length;i++)
				menuElements[i].style.color="#ffffff";
			document.getElementById(btnId).style.color="#51C9E5";
			
                }

