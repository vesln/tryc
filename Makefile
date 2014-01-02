browser: node_modules lib/* components
	@./node_modules/.bin/component-build -s tryc -o .
	@mv build.js tryc.js

components: node_modules component.json
	@./node_modules/.bin/component-install --dev

build: components lib/*
	@./node_modules/.bin/component-build --dev

test: test-node test-browser

test-node:
	@NODE_ENV=test node test/

test-browser: build
	@./node_modules/karma/bin/karma start \
		--single-run --browsers PhantomJS,Chrome,Firefox

ci: test-node

coverage:
	@./node_modules/.bin/istanbul cover test/index.js

node_modules: package.json
	@npm i

.PHONY: all test coverage
