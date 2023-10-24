build: *.pdf
	latexmk -c

%.pdf:
	latexmk -pdf $(@:.pdf=.tex)

clean:
	latexmk -C