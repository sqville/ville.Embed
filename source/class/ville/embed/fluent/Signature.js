/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Signature",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.02 2.77a2.44 2.44 0 1 1 3.46 3.46L14.2 7.5l.08.09a2 2 0 0 1 0 2.82l-1.44 1.44a.5.5 0 0 1-.7-.7l1.44-1.44a1 1 0 0 0 0-1.42l-.09-.08-6.65 6.64a.5.5 0 0 1-.23.14l-4 1a.5.5 0 0 1-.6-.65l1.26-3.75a.5.5 0 0 1 .12-.2l8.62-8.62Zm2.75.7a1.44 1.44 0 0 0-2.04 0l-8.54 8.55-.93 2.77 2.98-.74 8.53-8.53c.57-.56.57-1.48 0-2.04ZM3.22 16.88l.05.03C4 17.44 5.1 18 6.5 18c.74 0 1.42-.26 2.03-.6.6-.35 1.16-.8 1.66-1.2l.12-.1c.46-.37.86-.7 1.23-.91.4-.24.64-.27.8-.22.27.1.42.3.68 1.17.09.3.24.61.47.87.23.26.57.49 1.01.49.47 0 .94-.23 1.3-.44a12.61 12.61 0 0 0 .97-.64 4.6 4.6 0 0 1 .82-.42l.04-.02h.01a.5.5 0 0 0-.28-.96h-.01l-.02.01a2.35 2.35 0 0 0-.31.12c-.2.09-.47.22-.8.43l-.33.23c-.19.13-.38.26-.6.39-.33.2-.6.3-.79.3-.06 0-.15-.03-.26-.15-.11-.13-.2-.31-.26-.5-.24-.8-.5-1.55-1.32-1.82-.59-.2-1.16.02-1.63.3-.44.25-.9.63-1.34.99l-.13.1c-.5.41-1 .8-1.53 1.1-.52.3-1.02.48-1.53.48-.75 0-1.4-.2-1.93-.47l-1.35.34ZM17.5 15.5l-.14-.48.14.48Z",
    FILLED : "M12.02 2.77a2.44 2.44 0 1 1 3.46 3.46L14.2 7.5l.08.09a2 2 0 0 1 0 2.82l-1.44 1.44a.5.5 0 0 1-.7-.7l1.44-1.44a1 1 0 0 0 0-1.42l-.09-.08-6.65 6.64a.5.5 0 0 1-.23.14l-4 1a.5.5 0 0 1-.6-.65l1.26-3.75a.5.5 0 0 1 .12-.2l8.62-8.62ZM3.27 16.9c-.02 0-.04-.02-.05-.03l1.35-.34c.53.27 1.18.47 1.93.47.5 0 1.01-.18 1.53-.47.53-.3 1.03-.7 1.53-1.1l.13-.11c.44-.36.9-.74 1.34-1 .47-.27 1.04-.49 1.63-.3.82.28 1.08 1.04 1.32 1.84.05.18.15.36.26.49.11.12.2.15.26.15.19 0 .46-.1.8-.3a9.43 9.43 0 0 0 .93-.62 5.6 5.6 0 0 1 1.1-.55h.03l.14.47-.14-.48a.5.5 0 0 1 .28.96 2.74 2.74 0 0 0-.21.08 4.6 4.6 0 0 0-.92.54l-.7.46a2.7 2.7 0 0 1-1.31.44c-.44 0-.78-.23-1-.49a2.33 2.33 0 0 1-.48-.87c-.26-.87-.41-1.08-.68-1.17-.16-.05-.4-.02-.8.22-.37.21-.77.54-1.23.92l-.12.1c-.5.4-1.06.84-1.66 1.19-.6.34-1.29.6-2.03.6a5.49 5.49 0 0 1-3.23-1.1Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});