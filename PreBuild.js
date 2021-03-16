

function PreBuild ()
{
	CWSys.run ("git rev-parse HEAD > GitStatus.txt", 200);
	var GitStatus = CWSys.readStringFromFile ("GitStatus.txt");

	var SHAfile = "#ifndef GIT_SHA_H\n" +
				  "#define GIT_SHA_H\n\n" +
				  "static const char GitSHA[] = \"" +
				  GitStatus.substring(0,40) + "\";\n\n" +
				  "#endif\n";

	CWSys.writeStringToFile ("./GitSHA.h", SHAfile);
}
