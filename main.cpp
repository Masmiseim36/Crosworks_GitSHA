#include <stdint.h>
#include <__cross_studio_io.h>
#include "GitSHA.h"


volatile uint32_t TickCounter = 0;
uint32_t TickLength = 0;



int main (void)
{	
    if (debug_enabled ())
	{
		debug_printf ("Hello git SHA: %s", GitSHA);
	}

	while (true)
		;
	return 0;
}