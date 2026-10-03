// RVIP: scrolling a help chapter shorter than the view must not throw.
// Run with: dart test -p chrome test/rvip/help_scroll_test.dart
@TestOn("browser")
library;
import 'package:hauberk/src/ui/help/help_dialog.dart';
import 'package:hauberk/src/ui/input.dart';
import 'package:test/test.dart';

void main() {
  test('help scroll in a short chapter', () {
    var help = HelpDialog();
    expect(() => help.handleInput(Input.s), returnsNormally);
    expect(() => help.handleInput(Input.runS), returnsNormally);
  });
}
