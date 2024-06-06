/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SurfaceEarbuds",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M14.13 8.25a4.87 4.87 0 1 1-1.1 9.63l-.1.03-2.21.9c-1 .41-2.15.13-2.85-.68l-.1-.15-.28-.36a2.5 2.5 0 0 1-.04-2.91l.1-.15 1.58-1.94.17-.2a4.87 4.87 0 0 1 4.83-4.17Zm-4.8 5.72-1 1.22a1.5 1.5 0 0 0-.12 1.71l.08.12.28.37a1.5 1.5 0 0 0 1.63.55l.14-.05 1.34-.55a4.88 4.88 0 0 1-2.36-3.37Zm4.8-4.72a3.88 3.88 0 0 0-3.76 2.93l-.07.3-.03.25-.01.18v.21c0 1.78 1.18 3.28 2.81 3.74l.2.04.22.05.2.02.17.02H14.33a3.88 3.88 0 0 0-.2-7.74ZM5.88 1c.66 0 1.29.13 1.86.37l.7-.23a2.5 2.5 0 0 1 2.66.73l.12.14.12.17.29.46c.53.84.5 1.91-.05 2.74l-.1.15-.13.14-.62.67A4.88 4.88 0 1 1 5.88 1Zm-.04 1h.04A3.87 3.87 0 1 0 9.1 8.02l-.06.04-.2.13a3.44 3.44 0 0 1-4.77-1.05A3.5 3.5 0 0 1 5.61 2.1l.23-.1Zm4.58.61a1.5 1.5 0 0 0-1.53-.56l-.14.04-2.36.78a2.5 2.5 0 0 0-1.46 3.74 2.44 2.44 0 0 0 3.75.46l.16-.16L10.6 5l.1-.11a1.5 1.5 0 0 0 .15-1.6l-.07-.12-.28-.45-.08-.12Zm-.8.53.05.08.26.42a.5.5 0 0 1-.8.6l-.06-.08-.26-.43a.5.5 0 0 1 .8-.59Z";
   var pathdfilled = "M8.55 14.03a5.75 5.75 0 0 0 2.9 4.24l-1.4.57a2 2 0 0 1-2.37-.66l-.27-.37a2 2 0 0 1 .06-2.44l1.08-1.34Zm5.7-5.53a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5ZM5.75 1c.2 0 .39.01.58.03l.28.05-.14.04A3.72 3.72 0 0 0 4.54 6.6a3.65 3.65 0 0 0 5.75.56A4.75 4.75 0 1 1 5.75 1Zm5.37.46.09.1.09.12.44.65a1.5 1.5 0 0 1-.03 1.72l-.09.12-1.88 2.18a2.65 2.65 0 0 1-4.26-.18 2.72 2.72 0 0 1 1.43-4.1l2.62-.97a1.5 1.5 0 0 1 1.59.36Zm-1.14.68a.5.5 0 0 0-.2.61l.03.08.26.43.06.07a.5.5 0 0 0 .84-.5l-.04-.09-.26-.43-.05-.07a.5.5 0 0 0-.64-.1Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});