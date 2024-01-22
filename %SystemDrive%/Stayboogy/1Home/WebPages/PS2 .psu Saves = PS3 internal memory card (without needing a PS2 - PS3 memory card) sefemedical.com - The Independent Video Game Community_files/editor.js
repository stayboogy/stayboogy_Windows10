/**
* @package [AddonsLab] Guest Posting
* @author AddonsLab
* @copyright AddonsLab
* @license https://addonslab.com/
* @link https://addonslab.com/
* @revision 36
* @version 1.6.0
This software is furnished under a license and may be used and copied
only  in  accordance  with  the  terms  of such  license and with the
inclusion of the above copyright notice.  This software  or any other
copies thereof may not be provided or otherwise made available to any
other person.  No title to and  ownership of the  software is  hereby
transferred.                                                         
                                                                     
You may not reverse  engineer, decompile, defeat  license  encryption
mechanisms, or  disassemble this software product or software product
license.  AddonsLab may terminate this license if you don't comply with
any of these terms and conditions.  In such event,  licensee  agrees 
to return licensor  or destroy  all copies of software  upon termination 
of the license.
*/
!function ($, window, document, _undefined) {
    $(document).on('EditorInit', function (evt, editorInfo) {
        var editor = editorInfo.editor;
        var init = false;
        var $form = editor.$textarea.closest('form');
        $form.find('input[type=submit]').not('.DisableOnSubmit').click(function (evt) {
            if (init === true) {
                return true;
            }

            init = true;
            evt.preventDefault();
            evt.stopPropagation();

            XenForo.ajax(
                window.guestReplyLoadEndpoint,
                {},
                function (ajaxData) {
                    if (XenForo.hasResponseError(ajaxData)) {
                        return;
                    }

                    if (ajaxData.hasOwnProperty('templateHtml')) {
                        new XenForo.ExtLoader(ajaxData, function () {
                            var $content = $(ajaxData.templateHtml);
                            $content.insertBefore($form.find('.submitUnit'));
                            $content.xfActivate();
                        });
                    } else if (ajaxData.hasOwnProperty('message')) {
                        // when a message is returned, consider just submitting the form, as we don't have a captcha to show
                        $form.submit();
                    }
                },
                {global: false}
            );

            return false;
        });
    });
}(jQuery, this, document);