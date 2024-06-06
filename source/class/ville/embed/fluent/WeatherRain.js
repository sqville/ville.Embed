/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherRain",
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

   var pathdregular = "M10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13h-.7l-.02.03-1.48 2.7a.5.5 0 0 1-.91-.39l.03-.08L12.3 13h-1.85l-.02.03-1.48 2.7a.5.5 0 0 1-.91-.39l.03-.08L9.3 13H7.43l-1.49 2.74a.5.5 0 0 1-.6.23l-.08-.03a.5.5 0 0 1-.23-.6l.03-.08L6.3 13h-.42A2.82 2.82 0 0 1 3 10.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 5.55 7.53 4 10 4Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 12 5.82 12h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 5Z";
   var pathdfilled = "M10.02 4.02c2.46 0 3.86 1.57 4.06 3.47h.06a2.82 2.82 0 0 1 2.88 2.76 2.82 2.82 0 0 1-2.88 2.77h-.71l-.01.02-1.49 2.7a.5.5 0 0 1-.91-.39l.04-.08 1.23-2.25h-1.85l-.01.02-1.49 2.7a.5.5 0 0 1-.9-.39l.03-.08 1.23-2.25H7.43l-1.48 2.73a.5.5 0 0 1-.6.23l-.08-.03a.5.5 0 0 1-.24-.6l.04-.08 1.22-2.25h-.4a2.82 2.82 0 0 1-2.87-2.77c0-1.46 1.19-2.67 2.7-2.75h.23c.2-1.92 1.6-3.48 4.07-3.48Z";
   
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